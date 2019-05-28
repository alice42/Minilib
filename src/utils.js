export let conflictsValidator = (validType, conflicts) => (props, propName, componentName) => {
  let conflictedProp
  if (typeof props[propName] !== validType) return new Error(`<${componentName}>: ${propName} must be a ${validType}!`)
  if (props[propName] && (conflictedProp = conflicts.find(p => props[p]))) {
    return new Error(`<${componentName}>: ${propName} can't be used if ${conflictedProp} is already used!`)
  }
}
