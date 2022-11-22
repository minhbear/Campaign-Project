const CampaignFactory = artifacts.require("CampaignFactory");

contract("Campaign Factory", accounts => {
    it("can create new campaign contract", async () => {
        const CampaignFactoryInstance = await CampaignFactory.deployed();
        const minimumPrice = 100;
        await CampaignFactoryInstance.createCampaign(minimumPrice, {from: accounts[0]});
        const listCampaign = await CampaignFactoryInstance.getDeployedCampaigns();
        const CampaignCreated = listCampaign[0];
        console.log(CampaignCreated);
        assert.ok(CampaignCreated);
    });
})
