import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { UserCreateNestedOneWithoutFK_FeatureRequestInput } from "../inputs/UserCreateNestedOneWithoutFK_FeatureRequestInput";

@TypeGraphQL.InputType("FeatureRequestCreateInput", {
  isAbstract: true
})
export class FeatureRequestCreateInput {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FeatureRequestID?: string | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ImplementedTime?: Date | undefined;

  @TypeGraphQL.Field(_type => UserCreateNestedOneWithoutFK_FeatureRequestInput, {
    nullable: true
  })
  FK_User?: UserCreateNestedOneWithoutFK_FeatureRequestInput | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title?: string | undefined;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body?: string | undefined;
}
