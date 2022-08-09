import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FeatureRequestMaxAggregate", {
  isAbstract: true
})
export class FeatureRequestMaxAggregate {
  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FeatureRequestID!: string | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  DeletedTime!: Date | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  ImplementedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Title!: string | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Body!: string | null;
}
