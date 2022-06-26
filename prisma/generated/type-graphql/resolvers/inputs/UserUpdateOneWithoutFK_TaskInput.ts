import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_TaskInput } from "../inputs/UserCreateOrConnectWithoutFK_TaskInput";
import { UserCreateWithoutFK_TaskInput } from "../inputs/UserCreateWithoutFK_TaskInput";
import { UserUpdateWithoutFK_TaskInput } from "../inputs/UserUpdateWithoutFK_TaskInput";
import { UserUpsertWithoutFK_TaskInput } from "../inputs/UserUpsertWithoutFK_TaskInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_TaskInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_TaskInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_TaskInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_TaskInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_TaskInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_TaskInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_TaskInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_TaskInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_TaskInput | undefined;
}
