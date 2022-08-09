import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateOrConnectWithoutFK_FeatureRequestInput } from "../inputs/UserCreateOrConnectWithoutFK_FeatureRequestInput";
import { UserCreateWithoutFK_FeatureRequestInput } from "../inputs/UserCreateWithoutFK_FeatureRequestInput";
import { UserUpdateWithoutFK_FeatureRequestInput } from "../inputs/UserUpdateWithoutFK_FeatureRequestInput";
import { UserUpsertWithoutFK_FeatureRequestInput } from "../inputs/UserUpsertWithoutFK_FeatureRequestInput";
import { UserWhereUniqueInput } from "../inputs/UserWhereUniqueInput";

@TypeGraphQL.InputType("UserUpdateOneWithoutFK_FeatureRequestInput", {
  isAbstract: true
})
export class UserUpdateOneWithoutFK_FeatureRequestInput {
  @TypeGraphQL.Field(_type => UserCreateWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  create?: UserCreateWithoutFK_FeatureRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserCreateOrConnectWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  connectOrCreate?: UserCreateOrConnectWithoutFK_FeatureRequestInput | undefined;

  @TypeGraphQL.Field(_type => UserUpsertWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  upsert?: UserUpsertWithoutFK_FeatureRequestInput | undefined;

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

  @TypeGraphQL.Field(_type => UserUpdateWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  update?: UserUpdateWithoutFK_FeatureRequestInput | undefined;
}
