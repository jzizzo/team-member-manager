import { useState, useEffect } from "react";
import Divider from "../components/Divider";
import { capitalizeString, formatMobile, urlPrefix } from "../helpers";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus, faUser } from "@fortawesome/free-solid-svg-icons";
import { Role, TeamMember } from "../types/types";
import { useNavigate } from "react-router-dom";

const TeamMemberItem: React.FC<{ member: TeamMember }> = ({ member }) => {
  const navigate = useNavigate();

  const [isFocused, setIsFocused] = useState(false);
  const formattedName = `${capitalizeString(
    member.first_name
  )} ${capitalizeString(member.last_name)}${
    member.role === Role.admin ? " (Admin)" : ""
  }`;
  return (
    <div key={member.id}>
      <div
        style={{
          borderRadius: 16,
          backgroundColor: isFocused ? "lightgrey" : "white",
          padding: 8,
          margin: "5px 16px",
        }}
        onClick={() => navigate(`/edit/:${member.id}`, { state: { member } })}
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
            <div style={{ fontWeight: "bold" }}>{formattedName}</div>
            <div style={{ paddingTop: 4, color: "grey" }}>
              {formatMobile(member.phone_number)}
            </div>
            <div
              style={{ paddingTop: 4, color: "grey" }}
            >{`${member.email.toLowerCase()}`}</div>
          </div>
        </div>
      </div>
      <Divider styles={{ width: "100%" }} />
    </div>
  );
};

const TeamMemberList: React.FC = () => {
  const navigate = useNavigate();
  const [teamMembers, setTeamMembers] = useState<TeamMember[]>([]);

  useEffect(() => {
    fetch(`${urlPrefix}/api/team_members`)
      .then((response) => response.json())
      .then((data) => setTeamMembers(data))
      .catch((error) => console.log("fetching team members error: ", error));
  }, []);

  return (
    <div style={{ padding: 8 }}>
      <div
        style={{ position: "absolute", top: 10, right: 10 }}
        onClick={() => navigate("/add")}
      >
        <FontAwesomeIcon icon={faPlus} size="lg" color="blue" />
      </div>
      <div style={{ marginTop: 16, fontSize: 32, fontWeight: 600 }}>
        Team Members
      </div>
      {teamMembers.length > 0 ? (
        <>
          <div
            style={{
              marginTop: 8,
              fontSize: 16,
              color: "grey",
            }}
          >{`You have ${teamMembers.length} team member${
            teamMembers.length > 1 ? "s" : ""
          }.`}</div>
          <Divider styles={{ marginTop: 32 }} />
          {teamMembers.map((member) => (
            <TeamMemberItem member={member} />
          ))}
        </>
      ) : (
        <>
          <div
            style={{
              marginTop: 8,
              fontSize: 16,
              color: "grey",
            }}
          >
            You have no team members
          </div>
          <Divider styles={{ marginTop: 32 }} />
        </>
      )}
    </div>
  );
};

export default TeamMemberList;
