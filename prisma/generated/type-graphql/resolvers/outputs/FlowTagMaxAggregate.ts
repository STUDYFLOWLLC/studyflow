import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FlowTagMaxAggregate", {
  isAbstract: true
})
export class FlowTagMaxAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FlowTagID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  Public!: boolean | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  Name!: string | null;
}
