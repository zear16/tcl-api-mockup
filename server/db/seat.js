const getSeat = (x, y, z, h, w, status) => {
    return {
        type: 1,
        pos: {
            x,
            y,
            z
        },
        dim: {
            h,
            w
        },
        status
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
        {
            type: 2,
            pos: {
                x: 0,
                y: 0,
                z: 0
            },
            dim: {
                h: 1,
                w: 2
            },
            name: 'ทางขึ้น'
        },
        {
            type: 2,
            pos: {
                x: 2,
                y: 0,
                z: 0
            },
            dim: {
                h: 10,
                w: 1
            },
            name: 'ทางเดิน'
        },
        {
            type: 2,
            pos: {
                x: 3,
                y: 0,
                z: 0
            },
            dim: {
                h: 1,
                w: 2
            },
            name: 'พนักงานขับรถ'
        },
        getSeat(0, 1, 0, 1, 1, 'F'),
        getSeat(1, 1, 0, 1, 1, 'F'),
        getSeat(3, 1, 0, 1, 1, 'F'),
        getSeat(4, 1, 0, 1, 1, 'F')
    ]
};

module.exports = seat;
