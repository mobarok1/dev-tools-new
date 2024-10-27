const exampleText = ['Blazing Fast Performance', 'NVMe SSD Technology', 'Robust Security', '99.99% Uptime Guarantee', 'Superior Load Times', '100% Money Back Guarantee', '24/7 Expert Support'];
      const exampleTyping = new AutoTyping('.autoWritingSelection', exampleText, {
         typeSpeed: 50,
         deleteSpeed: 50,
         waitBeforeDelete: 2000,
         waitBetweenWords: 500,
      });
exampleTyping.start()