import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_BugReportInput } from "../inputs/UserCreateOrConnectWithoutFK_BugReportInput";
import { UserCreateWithoutFK_BugReportInput } from "../inputs/UserCreateWithoutFK_BugReportInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserCreateNestedOneWithoutFK_BugReportInput", {
  isAbstract: true
})
export class UserCreateNestedOneWithoutFK_BugReportInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BugReportInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_BugReportInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;
}
