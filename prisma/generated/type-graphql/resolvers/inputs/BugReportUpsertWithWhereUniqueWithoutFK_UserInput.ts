import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { BugReportCreateWithoutFK_UserInput } from "../inputs/BugReportCreateWithoutFK_UserInput";
import { BugReportUpdateWithoutFK_UserInput } from "../inputs/BugReportUpdateWithoutFK_UserInput";
import { BugReportWhereUniqueInput } from "../inputs/BugReportWhereUniqueInput";

@TypeGraphQL.InputType("BugReportUpsertWithWhereUniqueWithoutFK_UserInput", {
  isAbstract: true
})
export class BugReportUpsertWithWhereUniqueWithoutFK_UserInput {
  @TypeGraphQL.Field(_type => BugReportWhereUniqueInput, {
    nullable: false
  })
  where!: BugReportWhereUniqueInput;

  @TypeGraphQL.Field(_type => BugReportUpdateWithoutFK_UserInput, {
    nullable: false
  })
  update!: BugReportUpdateWithoutFK_UserInput;

  @TypeGraphQL.Field(_type => BugReportCreateWithoutFK_UserInput, {
    nullable: false
  })
  create!: BugReportCreateWithoutFK_UserInput;
}
