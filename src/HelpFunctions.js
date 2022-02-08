export const getAttribute = (data, nameOfAtribute) => {

    switch (nameOfAtribute) {
        case 'Power':
            return data.Power;
        case 'Speed':
            return data.Speed;
        case 'Luck':
            return data.Luck;
        case 'Attitude':
            return data.Attitude;
        case 'Autonomy':
            return data.Autonomy;
        case 'Range':
            return data.Range;
        case 'Weight':
            return data.Weight;
        case 'Battery':
            return data.Battery;
        case 'Awesomeness':
            return data.Awesomeness;
        case 'Fair':
            return data.Fair;
        case 'Logical':
            return data.Logical;
        case 'Bald':
            return data.Bald;
    }
}

