import React from 'react';
import ClimbingBoxLoader from 'react-spinners/ClimbingBoxLoader';
const Loader = () => {
  return (
    <div class="flex h-screen w-screen items-center justify-content pl-80 pb-60">
      <ClimbingBoxLoader color="hsla(229, 67%, 53%, 1)" loading size={50} />
    </div>
  );
};
export default Loader;
