import { useState, useEffect } from "react";
import Divider from "../components/Divider";
import { capitalizeString } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";

enum Role {
  regular,
  admin,
}

interface TeamMember {
  id: number;
  first_name: string;
  last_name: string;
  phone_number: string;
  email: string;
  role: Role;
}

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => {
  const [isFocused, setIsFocused] = useState(false);
  const formattedName = `${capitalizeString(
    member.first_name
  )} ${capitalizeString(member.last_name)}`;
  const formattedMobile = `${member.phone_number.slice(
    0,
    3
  )}-${member.phone_number.slice(3, 6)}-${member.phone_number.slice(6)}`;
  return (
    <div
      key={member.id}
      style={{
        borderRadius: 16,
        backgroundColor: isFocused ? "lightgrey" : "white",
        paddingLeft: 8,
        margin: "5px 16px",
      }}
      onClick={() => console.log("clicked: ", formattedName)}
      onMouseEnter={() => setIsFocused(true)}
      onMouseLeave={() => setIsFocused(false)}
    >
      <div
        style={{
          display: "flex",
          flexDirection: "row",
        }}
      >
        <FontAwesomeIcon
          icon={faUser}
          size="2x"
          style={{
            alignSelf: "center",
          }}
        />
        <div style={{ paddingLeft: 16 }}>
          <div style={{ paddingTop: 8, fontWeight: "bold" }}>
            {formattedName}
          </div>
          <div style={{ paddingTop: 4 }}>{`${formattedMobile}`}</div>
          <div style={{ paddingTop: 4 }}>{`${member.email.toLowerCase()}`}</div>
        </div>
      </div>
      <Divider />
    </div>
  );
};

const TeamMemberList: React.FC = () => {
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch("http://localhost:8000/api/team_members")
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.log("fetching team members error: ", error));
  }, []);

  return (
    <div style={{ padding: "8px" }}>
      <div style={{ position: "absolute", top: 10, right: 10 }}>
        <FontAwesomeIcon icon={faPlus} size="lg" color="blue" />
      </div>
      <h1>Team Members</h1>
      {teamMembers.length > 0 ? (
        <>
          <div style={{ fontSize: 16 }}>{`You have ${
            teamMembers.length
          } team member${teamMembers.length > 1 ? "" : "s"}`}</div>
          <Divider />

          {teamMembers.map((member) => (
            <TeamMemberItem member={member} />
          ))}
        </>
      ) : (
        <div style={{ fontSize: 16 }}>You have no team members</div>
      )}
    </div>
  );
};

export default TeamMemberList;
