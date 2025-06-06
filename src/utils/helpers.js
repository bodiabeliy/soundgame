const groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      return result;
    }, {})
  };

  const getChildrenByGroup = (list) => {
    return Object.entries(groupBy(list, "itemName"));
  };

  const playAudioSound = (sceneElement) => {
    let audioDataSet = null;
    const soundEntities = sceneElement.querySelectorAll('[mindar-image-target][sound]');
      soundEntities.forEach((entity) => {
        entity.addEventListener('targetFound', () => {
          // console.log('🎯 Target found:', entity.components.sound.data.src);
          audioDataSet = new Audio(entity.components.sound.data.src);
          audioDataSet.play();

          // entity.components.sound?.playSound();
        });

        entity.addEventListener('targetLost', () => {
          // console.log('🔇 Target lost');
          audioDataSet.pause();
          audioDataSet = null;
          
        });
      });

  }
  export { getChildrenByGroup, playAudioSound };