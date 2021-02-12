const {expect} = require("chai");

describe("ERC1155 token", function () {

    let NFT;
    let nft;
    let addr;

    beforeEach(async function () {

        [addr] = await ethers.getSigners();

        NFT = await ethers.getContractFactory("NFT");
        nft = await NFT.deploy();
        await nft.deployed();

    });


    describe("Deployment", function () {


        it("Did addr receive the NFT", async function () {
            await nft.makeNFT(1);
            let balance = await nft.balanceOf(addr.address, 0);
            let balanceHex = balance.toString();
            expect(balanceHex).to.equal('1000000000000000000');
        });


    });


});