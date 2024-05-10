import { useState, useEffect, FormEvent, ChangeEvent } from "react";
import { Role, TeamMember } from "../types/types";
import Divider from "../components/Divider";
import { useLocation, useNavigate } from "react-router-dom";

type AddEditMemberProps = {
  isEditingMember: boolean;
  teamMember: TeamMember;
};

const AddEditMember: React.FC<AddEditMemberProps> = ({
  isEditingMember,
  teamMember,
}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const [member, setMember] = useState<TeamMember>({
    first_name: "",
    last_name: "",
    phone_number: "",
    email: "",
    role: Role.regular,
  });

  useEffect(() => {
    if (isEditingMember && location?.state?.member)
      setMember(location.state.member);
  }, [location?.state?.member]);

  useEffect(() => {
    if (teamMember) setMember(teamMember);
  }, [teamMember]);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setMember((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const onSave = async () => {
    const url = isEditingMember
      ? `http://localhost:8000/api/team_members/${member.id}`
      : "http://localhost:8000/api/team_members";
    const method = isEditingMember ? "PUT" : "POST";

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "content-type": "application/json",
          accept: "application/json",
        },
        body: JSON.stringify(member),
      });
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log("error adding team member: ", error);
    }
  };

  const onDelete = async () => {
    const url = `http://localhost:8000/api/team_members/${member.id}`;
    const method = "DELETE";

    try {
      const response = await fetch(url, {
        method,
      });
      if (response.ok) {
        navigate("/");
      }
    } catch (error) {
      console.log("error deleting team member:", error);
    }
  };

  return (
    <div style={{ padding: 8 }}>
      <div style={{ marginTop: 16, fontSize: 32, fontWeight: 600 }}>
        {isEditingMember ? "Edit team member" : "Add a team member"}
      </div>
      <>
        <div
          style={{
            marginTop: 8,
            fontSize: 16,
            color: "grey",
          }}
        >
          {isEditingMember
            ? "Edit contact info, location, and role."
            : "Set email, location, and role."}
        </div>
        <Divider styles={{ marginTop: 32 }} />
      </>
      <div style={{ fontWeight: "bold" }}>Info</div>
      <form
        style={{
          display: "flex",
          flexDirection: "column",
          marginTop: 16,
          gap: 10,
        }}
      >
        <input
          type="text"
          name="first_name"
          value={member.first_name}
          onChange={handleChange}
          placeholder="First Name"
          required
        />
        <input
          type="text"
          name="last_name"
          value={member.last_name}
          onChange={handleChange}
          placeholder="Last Name"
          required
        />
        <input
          type="text"
          name="phone_number"
          value={member.phone_number}
          // An improvement here would to add logic to display the formatted number with dashes
          onChange={handleChange}
          placeholder="Phone Number"
          required
        />
        <input
          type="text"
          name="email"
          value={member.email}
          onChange={handleChange}
          placeholder="Email"
          required
        />
        <select name="role" value={member.role} onChange={handleChange as any}>
          <option value={Role.regular}>Regular - Can't delete members</option>
          <option value={Role.admin}>Admin - Can delete members</option>
        </select>
      </form>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: 10,
        }}
      >
        {isEditingMember && (
          <button
            style={{
              marginRight: "auto",
              padding: "6px 12px",
              color: "red",
              backgroundColor: "white",
              borderWidth: 1,
              borderColor: "grey",
              borderRadius: 4,
            }}
            type="submit"
            onClick={onDelete}
          >
            Delete
          </button>
        )}
        <button
          style={{
            marginLeft: "auto",
            padding: "6px 12px",
            color: "white",
            backgroundColor: "blue",
            borderWidth: 0,
            borderRadius: 4,
          }}
          type="submit"
          onClick={onSave}
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default AddEditMember;
