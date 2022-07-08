// SPDX-License-Identifier: MIT
pragma solidity >=0.4.17 <0.9.0;

contract GymMembership {
  Member[] public members;
  struct Member{
    uint memberId;
    string name;
    bool paid;

  }
  uint membershipFees= 0.1;
  mapping(address => string) public Members; //mapping to see the owner of address
  mapping(address => bool) public paid;
function register(string memory name) public{
name[msg.sender] = name;
members.push(Member(_name));

}
  modifier _isRegistered(bool memory _name){
    require(members[_name]==registered, "this user is registered");
  }
  function pay(amount) public{
    require(paid[msg.sender]==false);

  }
}
