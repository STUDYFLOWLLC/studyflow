import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";

@TypeGraphQL.ObjectType("FlowViewMinAggregate", {
  isAbstract: true
})
export class FlowViewMinAggregate {
  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FlowViewID!: number | null;

  @TypeGraphQL.Field(_type => Date, {
    nullable: true
  })
  CreatedTime!: Date | null;

  @TypeGraphQL.Field(_type => String, {
    nullable: true
  })
  FK_FlowID!: string | null;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  FK_UserID!: number | null;
}
