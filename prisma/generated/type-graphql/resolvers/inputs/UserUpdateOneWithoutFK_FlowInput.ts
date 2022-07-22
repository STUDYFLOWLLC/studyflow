import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowInput";
import { UserCreateWithoutFK_FlowInput } from "../inputs/UserCreateWithoutFK_FlowInput";
import { UserUpdateWithoutFK_FlowInput } from "../inputs/UserUpdateWithoutFK_FlowInput";
import { UserUpsertWithoutFK_FlowInput } from "../inputs/UserUpsertWithoutFK_FlowInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FlowInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FlowInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FlowInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FlowInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FlowInput | undefined;
}
