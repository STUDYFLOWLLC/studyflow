import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FlowViewInput } from "../inputs/UserCreateOrConnectWithoutFK_FlowViewInput";
import { UserCreateWithoutFK_FlowViewInput } from "../inputs/UserCreateWithoutFK_FlowViewInput";
import { UserUpdateWithoutFK_FlowViewInput } from "../inputs/UserUpdateWithoutFK_FlowViewInput";
import { UserUpsertWithoutFK_FlowViewInput } from "../inputs/UserUpsertWithoutFK_FlowViewInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FlowViewInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FlowViewInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FlowViewInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FlowViewInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FlowViewInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FlowViewInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FlowViewInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FlowViewInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FlowViewInput | undefined;
}
