import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportScalarWhereInput } from "../inputs/BugReportScalarWhereInput";
import { BugReportUpdateManyMutationInput } from "../inputs/BugReportUpdateManyMutationInput";

@TypeGraphQL.InputType("BugReportUpdateManyWithWhereWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportUpdateManyWithWhereWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BugReportScalarWhereInput, {
    nullable: false
  })
  where!: BugReportScalarWhereInput;

  @TypeGraphQL.Field(_type => BugReportUpdateManyMutationInput, {
    nullable: false
  })
  data!: BugReportUpdateManyMutationInput;
}
