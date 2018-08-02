import test from 'ava';
import m from '.';

test('user', async t => {
	const num = await m('CodeDotJS', 'instagram-profile-picture');

	t.is(num.repositories, '12');
	t.is(num.packages, '0');
});
