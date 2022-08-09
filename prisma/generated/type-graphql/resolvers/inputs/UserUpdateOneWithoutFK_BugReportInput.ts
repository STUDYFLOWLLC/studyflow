import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_BugReportInput } from "../inputs/UserCreateOrConnectWithoutFK_BugReportInput";
import { UserCreateWithoutFK_BugReportInput } from "../inputs/UserCreateWithoutFK_BugReportInput";
import { UserUpdateWithoutFK_BugReportInput } from "../inputs/UserUpdateWithoutFK_BugReportInput";
import { UserUpsertWithoutFK_BugReportInput } from "../inputs/UserUpsertWithoutFK_BugReportInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_BugReportInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_BugReportInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BugReportInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_BugReportInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_BugReportInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_BugReportInput | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  disconnect?: boolean | undefined;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  delete?: boolean | undefined;

  @TypeGraphQL.Field(_type => UserWhereUniqueInput, {
    nullable: true
  })
  connect?: UserWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_BugReportInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_BugReportInput | undefined;
}
