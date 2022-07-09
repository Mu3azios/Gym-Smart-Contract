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
  modifier _isRegistered(){
    require(members[msg.sender]== paid, "this user is registered");
    _;
  }
function register(string memory name) public{
name[msg.sender] = name;
members.push(Member(string, name));
}
  // function pay(uint amount) public{
  //   require(paid[msg.sender]==false, "this user has paid

  function transfer(address _to , uint256 _value) public returns (bool paid){

  }
  event Transfer(address indexed _from, address indexed _to, uint256 _value);

