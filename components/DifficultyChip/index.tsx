type Difficulty = 'easy' | 'medium' | 'hard';

interface DifficultyChipProps {
	difficulty: Difficulty;
}

const DifficultyChip = ({ difficulty }: DifficultyChipProps) => {
	switch (difficulty) {
		case 'easy':
			return (
				<span className="inline-flex items-center rounded-md bg-green-100 px-2.5 py-0.5 text-sm font-medium text-green-800">
					Easy
				</span>
			);
		case 'medium':
			return (
				<span className="inline-flex items-center rounded-md bg-yellow-100 px-2.5 py-0.5 text-sm font-medium text-yellow-800">
					Medium
				</span>
			);
		case 'hard':
			return (
				<span className="inline-flex items-center rounded-md bg-red-100 px-2.5 py-0.5 text-sm font-medium text-red-800">
					Hard
				</span>
			);
		default:
			return (
				<span className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-0.5 text-sm font-medium text-gray-800">
					Unknown
				</span>
			);
	}
};

export default DifficultyChip;
