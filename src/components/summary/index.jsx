import { Box, Flex, Heading, Text } from "@chakra-ui/react";
import TransactionForm from "../add-transcation";
import TransactionChartSummary from "../chart";
export default function Summary({
  isOpen,
  onClose,
  totalExpense,
  totalIncome,
}) {
  return (
    <Box
      border={"1px solid"}
      borderColor={"gray.100"}
      overflow={"hidden"}
      borderRadius={"10"}
      background={"white"}
      display={"flex"}
      p={"6"}
    >
      <Flex
        w="full"
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={{
          base: "column",
          sm: "column",
          md: "column",
          lg: "row",
          xl: "row",
        }}
      >
        <Flex
          flex={1}
          w={"full"}
          flexDirection={"column"}
          alignItems={"center"}
          justifyContent={"space-evenly"}
          ml={"-20"}
          mr={"2"}
        >
          <Heading size={"md"} mb={"4"} color={"gray.600"}>
            Balance is ${totalIncome - totalExpense}
          </Heading>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>${totalIncome}</Heading>
              <Text color={"gray.700"}>Total income</Text>
            </Flex>
          </Flex>
          <Flex
            justifyContent={"center"}
            alignItems={"center"}
            bg={"gray.50"}
            w="full"
            h="100px"
            border={"1px solid"}
            borderColor={"gray.100"}
          >
            <Flex flexDirection={"column"}>
              <Heading color={"gray.700"}>${totalExpense}</Heading>
              <Text color={"gray.700"}>Total Expense</Text>
            </Flex>
          </Flex>
        </Flex>
        <Box
          flex={1}
          mt={"10"}
          ml={"-90px"}
          mr={"5"}
          width={"300px"}
          height={"300px"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
        >
          <Heading>
            <TransactionChartSummary expense={totalExpense} income={totalIncome}/>
          </Heading>
        </Box>
      </Flex>
      <TransactionForm
        isOpen={isOpen}
        onClose={onClose}
        expense={totalExpense}
        income={totalIncome}
      />
    </Box>
  );
}
