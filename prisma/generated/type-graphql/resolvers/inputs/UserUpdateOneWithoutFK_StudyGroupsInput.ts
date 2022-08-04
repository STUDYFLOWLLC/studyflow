import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_StudyGroupsInput } from "../inputs/UserCreateOrConnectWithoutFK_StudyGroupsInput";
import { UserCreateWithoutFK_StudyGroupsInput } from "../inputs/UserCreateWithoutFK_StudyGroupsInput";
import { UserUpdateWithoutFK_StudyGroupsInput } from "../inputs/UserUpdateWithoutFK_StudyGroupsInput";
import { UserUpsertWithoutFK_StudyGroupsInput } from "../inputs/UserUpsertWithoutFK_StudyGroupsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_StudyGroupsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_StudyGroupsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_StudyGroupsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_StudyGroupsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_StudyGroupsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_StudyGroupsInput | undefined;
}
