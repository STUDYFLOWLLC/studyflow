import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateWithoutFK_BugReportInput } from "../inputs/UserCreateWithoutFK_BugReportInput";
import { UserUpdateWithoutFK_BugReportInput } from "../inputs/UserUpdateWithoutFK_BugReportInput";

@TypeGraphQL.InputType("UserUpsertWithoutFK_BugReportInput", {
  isAbstract: true
})
export class UserUpsertWithoutFK_BugReportInput {
  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_BugReportInput, {
    nullable: false
  })
  update!: UserUpdateWithoutFK_BugReportInput;

  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BugReportInput, {
    nullable: false
  })
  create!: UserCreateWithoutFK_BugReportInput;
}
