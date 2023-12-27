// SPDX-License-Identifier: MIT 
pragma solidity >=0.6.2;

import './extensions/VRC725Enumerable.sol';

contract MelemInstaller is VRC725Enumerable {
    string private _currentBaseURI;

    constructor(
        string memory _name, 
        string memory _symbol, 
        string memory _initBaseURI
    ) {
        // super call function
        __VRC725_init(_name, _symbol, msg.sender);
        setBaseURI(_initBaseURI);
    }

    function setBaseURI(string memory _newBaseURI) internal {
        _currentBaseURI = _newBaseURI;
    }

    function _baseURI() internal view virtual override returns (string memory) {
		return _currentBaseURI;
	}

    function mint(address _to) public onlyOwner {
        _safeMint(_to, totalSupply() + 1);
    }
}