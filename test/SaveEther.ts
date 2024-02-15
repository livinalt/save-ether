import {
  loadFixture,
} from "@nomicfoundation/hardhat-toolbox/network-helpers";
// import { anyValue } from "@nomicfoundation/hardhat-chai-matchers/withArgs";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("SaveEther", function () {
  // We define a fixture to reuse the same setup in every test.
  // We use loadFixture to run this setup once, snapshot that state,
  // and reset Hardhat Network to that snapshot in every test.
  async function deploySaveEtherFixture() {
    
    // Contracts are deployed using the first signer/account by default
    const [owner, otherAccount] = await ethers.getSigners();

    const SaveEther = await ethers.getContractFactory("SaveEther");
    const saveEther = await SaveEther.deploy();

    return { saveEther, owner, otherAccount };
  }


  describe("Deposit", function () {
    it("user should be able to successfully make deposit", async function () {
      const { saveEther } = await loadFixture(deploySaveEtherFixture);
      const deposit = ethers.parseEther("1");
      await expect(() => saveEther.deposit({ value: deposit }))
      .to.changeEtherBalance(saveEther, deposit);
    });

 /*    it("Should set the right owner", async function () {
      const { saveEther, owner } = await loadFixture(deploySaveEtherFixture);

      expect(await saveEther.owner()).to.equal(owner.address);
    });

    it("Should receive and store the funds to lock", async function () {
      const { saveEther, lockedAmount } = await loadFixture(
        deploysaveEtherFixture
      );

      expect(await ethers.provider.getBalance(lock.target)).to.equal(
        lockedAmount
      );
    });

    it("Should fail if the unlockTime is not in the future", async function () {
      // We don't use the fixture here because we want a different deployment
      const latestTime = await time.latest();
      const Lock = await ethers.getContractFactory("Lock");
      await expect(SaveEther.deploy(latestTime, { value: 1 })).to.be.revertedWith(
        "Unlock time should be in the future"
      );
    });
  }); */

/*   describe("Withdraw", function () {
    describe("Validations", function () {
      it("Should revert with the right error if called too soon", async function () {
        const { saveEther } = await loadFixture(deploySaveEtherFixture);

        await expect(saveEther.withdraw()).to.be.revertedWith(
          "You can't withdraw yet"
        );
      });

      it("Should revert with the right error if called from another account", async function () {
        const { SaveEther, unlockTime, otherAccount } = await loadFixture(
          deploySaveEtherFixture
        );

        // We can increase the time in Hardhat Network
        await time.increaseTo(unlockTime);

        // We use lock.connect() to send a transaction from another account
        await expect(SaveEther.connect(otherAccount).withdraw()).to.be.revertedWith(
          "You aren't the owner"
        );
      });

      it("Shouldn't fail if the unlockTime has arrived and the owner calls it", async function () {
        const { SaveEther, unlockTime } = await loadFixture(
          deploySaveEtherFixture
        );

        // Transactions are sent using the first signer by default
        await time.increaseTo(unlockTime);

        await expect(SaveEther.withdraw()).not.to.be.reverted;
      });
    });

    describe("CheckSavings", function () {
      it("Should return the on withdrawals", async function () {
        const { saveEther, unlockTime, lockedAmount } = await loadFixture(
          deploySaveEtherFixture
        );

        await time.increaseTo(unlockTime);

        await expect(saveEther.withdraw())
          .to.emit(saveEther, "Withdrawal")
          .withArgs(lockedAmount, anyValue); // We accept any value as `when` arg
      });
    });

    describe("sendOutSavings", function () {
      it("Should transfer the funds to the owner", async function () {
        const { saveEther } = await loadFixture(
          deploySaveEtherFixture
        );

        await time.increaseTo(unlockTime);

        await expect(saveEther.withdraw()).to.changeEtherBalances(
          [owner, saveEther],
          [lockedAmount, -lockedAmount]
        );
      });
    });
    
    describe("checkContractBal", function () {
      it("Should transfer the funds to the owner", async function () {
        const { saveEther, unlockTime, lockedAmount, owner } = await loadFixture(
          deploySaveEtherFixture
        );

        await time.increaseTo(unlockTime);

        await expect(saveEther.withdraw()).to.changeEtherBalances(
          [owner, saveEther],
          [lockedAmount, -lockedAmount]
        );
      });
    });

  }); */


  
  
  });
});
