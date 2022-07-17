import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFlowInput } from "../inputs/UserCreateOrConnectWithoutFlowInput";
import { UserCreateWithoutFlowInput } from "../inputs/UserCreateWithoutFlowInput";
import { UserUpdateWithoutFlowInput } from "../inputs/UserUpdateWithoutFlowInput";
import { UserUpsertWithoutFlowInput } from "../inputs/UserUpsertWithoutFlowInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFlowInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFlowInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFlowInput, {
    nullable: true
  })
  create?: UserCreateWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFlowInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFlowInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFlowInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFlowInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFlowInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFlowInput | undefined;
}
