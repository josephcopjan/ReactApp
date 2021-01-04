
export default (func) => (state, ownProps) => {
	try {
		return func(state, ownProps);
	} catch (error) {
		console.log(error);
	}

	return {};
};
