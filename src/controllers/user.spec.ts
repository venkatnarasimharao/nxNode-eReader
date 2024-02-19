import axios from 'axios';

describe('GET user list /get/users/list', () => {
    it('should return user detials', async () => {
        const res = await axios.get(`/get/users/list`);

        expect(res.status).toBe(200);
        expect(res.data).toEqual({
            "result": [],
            "count": 0
        });
    });
});