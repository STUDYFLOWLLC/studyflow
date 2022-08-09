import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportCreateWithoutFK_UserInput } from "../inputs/BugReportCreateWithoutFK_UserInput";
import { BugReportWhereUniqueInput } from "../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.InputType("BugReportCreateOrConnectWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportCreateOrConnectWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugReportCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: BugReportCreateWithoutFK_UserInput;
}
