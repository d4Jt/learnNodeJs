const Handlebars = require('handlebars');

module.exports = {
	sum: (a, b) => a + b,
	sortable: (field, sort) => {
		// kiểm tra xem có phải là field hiện tại đang sort hay không
		const sortType = field === sort.column ? sort.type : 'default';
		const icons = {
			default: 'fa-solid fa-sort',
			asc: 'fa-solid fa-arrow-down-a-z',
			desc: 'fa-solid fa-arrow-down-z-a',
		};
		const types = {
			// lần đầu tiên bấm vào thì sẽ là desc
			default: 'desc',
			asc: 'default',
			desc: 'asc',
		};

		// sort.type render ra icon và type (sortTye)
		const icon = icons[sortType];
		const type = types[sortType];

		const hrefDefault = Handlebars.escapeExpression(`?_sort`);
		const href = Handlebars.escapeExpression(`?_sort&column=${field}&type=${type}`);

		if (type === 'default') {
			const output = `<a href="${hrefDefault}">
               <i class="${icon}"></i>
               </a>`;
			return new Handlebars.SafeString(output);
		} else {
			const output = `<a href="${href}">
                  <i class="${icon}"></i>
                  </a>`;
			return new Handlebars.SafeString(output);
		}
	},
};
