function distanceFromHqInBlocks(customersLocation){
   const hqLocation = 42;
   let distanceCovered = customersLocation - hqLocation;
   return distanceCovered
  
    }
   console.log( distanceFromHqInBlocks(43))

   function distanceFromHqInFeet(customersLocation) {
      const hqLocation = 42;
      let distancceInFeet = (customersLocation - hqLocation)*264
      return distancceInFeet
   }
   console.log(distanceFromHqInFeet(43, 50))

   function distanceTravelledInFeet(start, destination){
      let feetTravelled = (destination - start)*264
      return feetTravelled 
   }
   console.log(distanceTravelledInFeet(43, 48))
   console.log(distanceTravelledInFeet(50, 60))
   console.log(distanceTravelledInFeet(34, 28))

   function calculatesFarePrice(start, destination){
      const distance = Math.abs(start - destination);
      if (distance <400){
         return 0;
      }
      else if (distance >=400 && distance <2000){
         const fare = distance*2.56;
         return parseFloat(fare.toFixed(2));
      }
      else if (distance >=2000 && distance <2500){
         return "$25.00";
      }
      else {
         return "Cannot travel that far";
      }
   }
