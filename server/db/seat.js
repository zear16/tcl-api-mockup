const getSeat = (x, y, z, h, w, status) => {
    return {
        type: 1,
        pos: {x, y, z},
        dim: {h, w},
        status
    }
}

const getObject = (x, y, z, h, w, name) => {
    return {
        type: 2,
        pos: {x, y, z},
        dim: {h, w},
        name
    }
}

const seat = {
    id: 1,
    code: 0,
    desc: '',
    std: {
        id: 1,
        desc: ''
    },
    totalFloor: 2,
    totalSeat: 36,
    cols: 5,
    rows: 10,
    platform: '',
    objects: [
        getObject(1, 1, 1, 1, 2, 'ทางขึ้น'),
        getObject(3, 1, 1, 10, 1, 'ทางเดิน'),
        getObject(4, 1, 1, 1, 2, 'พนักงานขับรถ'),
        getSeat(1, 2, 1, 1, 1, 'F'),
        getSeat(2, 2, 1, 1, 1, 'F'),
        getSeat(4, 2, 1, 1, 1, 'F'),
        getSeat(5, 2, 1, 1, 1, 'F'),
        getSeat(1, 3, 1, 1, 1, 'F'),
        getSeat(2, 3, 1, 1, 1, 'F'),
        getSeat(4, 3, 1, 1, 1, 'F'),
        getSeat(5, 3, 1, 1, 1, 'F'),
        getSeat(1, 4, 1, 1, 1, 'F'),
        getSeat(2, 4, 1, 1, 1, 'F'),
        getSeat(4, 4, 1, 1, 1, 'F'),
        getSeat(5, 4, 1, 1, 1, 'F'),
        getSeat(1, 5, 1, 1, 1, 'F'),
        getSeat(2, 5, 1, 1, 1, 'F'),
        getSeat(4, 5, 1, 1, 1, 'F'),
        getSeat(5, 5, 1, 1, 1, 'F'),
        getSeat(1, 6, 1, 1, 1, 'F'),
        getSeat(2, 6, 1, 1, 1, 'F'),
        getSeat(4, 6, 1, 1, 1, 'F'),
        getSeat(5, 6, 1, 1, 1, 'F'),
        getSeat(1, 7, 1, 1, 1, 'F'),
        getSeat(2, 7, 1, 1, 1, 'F'),
        getSeat(4, 7, 1, 1, 1, 'F'),
        getSeat(5, 7, 1, 1, 1, 'F'),
        getSeat(1, 8, 1, 1, 1, 'F'),
        getSeat(2, 8, 1, 1, 1, 'F'),
        getSeat(4, 8, 1, 1, 1, 'F'),
        getSeat(5, 8, 1, 1, 1, 'F'),
        getSeat(1, 9, 1, 1, 1, 'F'),
        getSeat(2, 9, 1, 1, 1, 'F'),
        getSeat(4, 9, 1, 1, 1, 'F'),
        getSeat(5, 9, 1, 1, 1, 'F'),
        getSeat(1, 10, 1, 1, 1, 'F'),
        getSeat(2, 10, 1, 1, 1, 'F'),
        getSeat(4, 10, 1, 1, 1, 'F'),
        getSeat(5, 10, 1, 1, 1, 'F')
    ]
};

module.exports = seat;
