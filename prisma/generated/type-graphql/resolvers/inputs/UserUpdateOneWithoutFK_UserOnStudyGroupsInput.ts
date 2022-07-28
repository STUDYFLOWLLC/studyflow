import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput";
import { UserCreateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserCreateWithoutFK_UserOnStudyGroupsInput";
import { UserUpdateWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserUpdateWithoutFK_UserOnStudyGroupsInput";
import { UserUpsertWithoutFK_UserOnStudyGroupsInput } from "../inputs/UserUpsertWithoutFK_UserOnStudyGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_UserOnStudyGroupsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_UserOnStudyGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_UserOnStudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_UserOnStudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_UserOnStudyGroupsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_UserOnStudyGroupsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_UserOnStudyGroupsInput | undefined;
}
