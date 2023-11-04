import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
	children: string;
}

const ExpandableText = ({ children }: Props) => {
	const [isTextExpandable, setTextExpandable] = useState(true);

	if (!children) return null;

	if (children.length < 300) return <Text>{children}</Text>;

	const displayText = isTextExpandable
		? children.substring(0, 300) + "..."
		: children;

	return (
		<Text>
			{displayText}
			<Button
				size="xs"
				fontWeight="bold"
				colorScheme="yellow"
				ml={2}
				onClick={() => setTextExpandable(!isTextExpandable)}
			>
				{isTextExpandable ? "Show More" : "Show Less"}
			</Button>
		</Text>
	);
};

export default ExpandableText;
