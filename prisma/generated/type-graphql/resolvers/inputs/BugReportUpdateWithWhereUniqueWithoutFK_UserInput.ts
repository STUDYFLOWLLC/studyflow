import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportUpdateWithoutFK_UserInput } from "../inputs/BugReportUpdateWithoutFK_UserInput";
import { BugReportWhereUniqueInput } from "../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.InputType("BugReportUpdateWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportUpdateWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugReportUpdateWithoutFK_UserInput, {
    nullable: false
  })
  data!: BugReportUpdateWithoutFK_UserInput;
}
