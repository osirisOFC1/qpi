import React from "react";

const UserCard =({user})=>{
    console.log(user)
return (
    <div id="card" class="card">
  <div class="content">
    <span>{user.name}</span>
    <span>{user.username}</span>

  </div>
</div>
)
}
export default UserCard;