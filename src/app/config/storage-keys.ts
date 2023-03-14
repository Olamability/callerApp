
interface ILocalStorageKeys {
    readonly [propName: string]:  string 
    }
    
    const storagePrefix: string ="beetle-app";
    
    export const LocalStorageKeys: ILocalStorageKeys = {
        /** used to store user data for the app */
        userdata: `${storagePrefix}:user-data`, 
        userstatus: `${storagePrefix}:user-status`, 
        /** used to store parcel data in the storage for sender */
        parcelData: `${storagePrefix}:parcel-data`,
        /** used to store parcel status */
        parcelStatus: `${storagePrefix}:parcel-status`,
        /** used to store dispatcher user data */
        dispatcherData:`${storagePrefix}:dispatcher-data`,
        /** used to store available dispatcher */
        dispatcherList: `${storagePrefix}:dispatcher-list`,	
        /** used to store found dispatcher details during searching for dispatcher */
        searchedDispatcher:`${storagePrefix}:connected-dispatcher-data`,
        /** used to store sender location for dashboard use */
        senderLocation: `${storagePrefix}:sender-location`,
        /** used to save radius used to find dispatchers during search for available dispatcher on the sender map */
        dispatcherRadius: `${storagePrefix}:dispatcher-radius`,		
        /** connected dispatchers */
        connectedDispatcherData: `${storagePrefix}:connectedDispatcherData`,		
        /** used to save list of ongoing parcel request for dispatcher */
        parcelRequestList: `${storagePrefix}:parcel-request-list`,
        /** used to save list of sent parcel request for sender */
        sentParcelList: `${storagePrefix}:sent-parcel-list`,
        /** used to save usertype for app service routing */
        usertype: `${storagePrefix}:usertype`,	
        'user-name': `${storagePrefix}:user-name`,
        /** used to save user mobile number */	
        mobile: `${storagePrefix}:mobile`,	
        /** used to save car list for selection */			
        carList: `${storagePrefix}:car-list`,
        /** used to save dispatcher location for sender track page update */
        dtl_: `${storagePrefix}:dtl_`,
        /** used to save user login status */	
        loggedstatus: `${storagePrefix}:logged-status`,		
        /** used to stored card info */
        cards: `${storagePrefix}:cards`,	
        /** used to save OTP code */
        code: `${storagePrefix}:code`,	
        /** used to save ride data */
        myrides: `${storagePrefix}:myrides`,	 
        /** used to save user current active ride */  
        currentActiveRide:  `${storagePrefix}:currentActiveRide`,
        userRideAccepted:  `${storagePrefix}:userRideAccepted`,
        userCurrentRideData:  `${storagePrefix}:userCurrentRideData`,
        userRideStartedStatus:  `${storagePrefix}:userRideStartedStatus`,
        postedRide:  `${storagePrefix}:postedRide`,
        isBookRide:  `${storagePrefix}:isBookRide`,
        selectedPaymentCard:  `${storagePrefix}:selectedPaymentCard`,
        isFrontDesk:  `${storagePrefix}:isFrontDesk`,
        frontDeskData:  `${storagePrefix}:frontDeskData`,
        userSelectedPromo:  `${storagePrefix}:userSelectedPromo`,
        showPromoCodeBox:  `${storagePrefix}:showPromoCodeBox`,
        rideToBePosted:  `${storagePrefix}:rideToBePosted`,
        userPaymentMode: `${storagePrefix}:userPaymentMode`,
        bookingid: `${storagePrefix}:bookingid`,
        userPaymentCardList: `${storagePrefix}:userPaymentCardList`,
        badgeCount: `${storagePrefix}:badgeCount`,
        approvedStatus: `${storagePrefix}:approvedStatus`,
    
        driverData: `${storagePrefix}:driverData`,
    
    
    }
    
    
    