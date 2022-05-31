import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowsInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowsInput";
import { UserCreateWithoutFK_FlowsInput } from "../inputs/UserCreateWithoutFK_FlowsInput";
import { UserUpdateWithoutFK_FlowsInput } from "../inputs/UserUpdateWithoutFK_FlowsInput";
import { UserUpsertWithoutFK_FlowsInput } from "../inputs/UserUpsertWithoutFK_FlowsInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FlowsInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FlowsInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowsInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowsInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowsInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FlowsInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FlowsInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowsInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FlowsInput | undefined;
}
