const ConditionalWrapper = ({ condition, wrapper, defaultWrapper, children }) =>
    condition ? wrapper(children) : defaultWrapper ? defaultWrapper(children) : children;

export default ConditionalWrapper;
