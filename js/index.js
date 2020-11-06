var signUp = new Vue({
    el: '#signUp',
    data: {
        email: null,
        pass: null,
        name: null,
        age: null,
        selected: 'Exercise',
        options: [
            { text: 'Exercise', value: 'Exercise' },
            { text: 'writing', value: 'writing' },
            { text: 'Reading', value: 'Reading' }
        ],
        agree : '예',
        show : false,
        validated : 0,
        button : '정보등록',
        errors: []
    },
    methods: {
        submit: function (event) {
            if(this.email && this.pass && this.name && this.age) {
                if(this.validated == 1) {
                    this.show = false;
                    this.validated = 0;
                    this.button = '정보등록';
                } else {
                    this.show = true;
                    this.validated = 1;
                    this.button = '정보수정';
                }
            }

            this.errors = [];
            if(!this.email) this.errors.push('이메일');
            if(!this.pass) this.errors.push('비밀번호');
            if(!this.name) this.errors.push('이름');
            if(!this.age) this.errors.push('나이');
        }
    }
})

