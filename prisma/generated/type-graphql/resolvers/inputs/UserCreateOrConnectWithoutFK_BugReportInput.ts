import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_BugReportInput } from "../inputs/UserCreateWithoutFK_BugReportInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateOrConnectWithoutFK_BugReportInput", {
  isAbstract: true
})
export class UserCreateOrConnectWithoutFK_BugReportInput {
  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: false
  })
  where!: UserWhereUniqueInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BugReportInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_BugReportInput;
}
