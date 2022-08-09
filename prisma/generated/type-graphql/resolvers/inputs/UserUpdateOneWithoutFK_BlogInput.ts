import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_BlogInput } from "../inputs/UserCreateOrConnectWithoutFK_BlogInput";
import { UserCreateWithoutFK_BlogInput } from "../inputs/UserCreateWithoutFK_BlogInput";
import { UserUpdateWithoutFK_BlogInput } from "../inputs/UserUpdateWithoutFK_BlogInput";
import { UserUpsertWithoutFK_BlogInput } from "../inputs/UserUpsertWithoutFK_BlogInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_BlogInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_BlogInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_BlogInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_BlogInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_BlogInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_BlogInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_BlogInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_BlogInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_BlogInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_BlogInput | undefined;
}
