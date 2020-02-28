export const findCasting = (casting=[], castingId) => casting.find(casting=> casting.id === castingId)

export const findAudition = (auditions=[], auditionId) => auditions.find(audition => audition.id === auditionId)

export const getAuditionsForCasting = (auditions = [], castingId) => (
    (!castingId)
        ? auditions
        : auditions.filter(audition => audition.castingOffice === castingId)
)

export const getCastingForAuditions = (casting=[], auditionCastingId) => (
    (casting.find(casting => casting.id === parseInt(auditionCastingId))).name
)