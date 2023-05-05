const Profile = ({ profiles }) => {
  return (
    <>
      {profiles.map(profile => (
        <li key={profile.name}>
          <hr />
          <div>Name: {profile.name}</div>
          <div>Age: {profile.age}</div>
          <div>
            <div>Hobby:</div>
            <ul>
              {profile.hobbies.map(hobby => (
                <li key={hobby}>{hobby}</li>
              ))}
            </ul>
          </div>
        </li>
      ))}
    </>
  );
};

export default Profile;
