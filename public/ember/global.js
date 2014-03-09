window.global = {test: 'works', user: window.user, authenticated: !!window.user };

console.log(window.global.authenticated);