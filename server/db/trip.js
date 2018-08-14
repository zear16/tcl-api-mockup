const trip = {};

trip.getTrip = (id, date, time, parkId, provinceId, arrvParkId, arrvProvinceId) => {
    return {
        id: id,
        date: date,
        time: time,
        dptrPark: {
            id: parkId,
            desc: '',
            descEn: '',
            terminal: '',
            province: {
                id: provinceId,
                desc: ''
            }
        },
        arrvPark: {
            id: arrvParkId,
            desc: '',
            descEn: '',
            terminal: '',
            province: {
                id: arrvProvinceId,
                desc: ''
            }
        },
        busStd: {
            id: 1,
            desc: ''
        },
        route: {
            desc: ''
        },
        fare: 200,
        fee: 20
    }
}

trip.getTripResult = (departureDate, returnDate) => {
    return {
        dptrTrips: {
            tripDate: departureDate,
            trips: [
                trip.getTrip(1, departureDate, '09:00', 1, 24, 11, 1),
                trip.getTrip(2, departureDate, '12:00', 1, 24, 11, 1),
                trip.getTrip(3, departureDate, '15:00', 1, 24, 11, 1),
                trip.getTrip(4, departureDate, '18:00', 1, 24, 11, 1)
            ]
        },
        rtrnTrips: {
            tripDate: returnDate,
            trips: [
                trip.getTrip(11, returnDate, '10:30', 11, 1, 1, 24),
                trip.getTrip(12, returnDate, '13:30', 11, 1, 1, 24),
                trip.getTrip(13, returnDate, '16:30', 11, 1, 1, 24),
                trip.getTrip(14, returnDate, '19:30', 11, 1, 1, 24)
            ]
        }
    };
}

module.exports = trip;
