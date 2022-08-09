import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../scalars";
import { User } from "../models/User";

@TypeGraphQL.ObjectType("FeatureRequest", {
  isAbstract: true
})
export class FeatureRequest {
  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  FeatureRequestID!: string;

  @TypeGraphQL.Field(_type => Date, {
    nullable: false
  })
  CreatedTime!: Date;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime?: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ImplementedTime?: Date | null;

  FK_User?: User | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID?: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Title!: string;

  @TypeGraphQL.Field(_type => String, {
    nullable: false
  })
  Body!: string;
}
